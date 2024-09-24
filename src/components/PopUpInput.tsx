import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material/";
import PricingButton from "./Button";
import ArrowBtn from "./ArrowBtn";
import axios from "axios";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const URL = "https://localhost:8080";

function PopUpInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org_name: "",
    image: "",
    file: null,
    platforms: [],
  });


  const [txSignature, setTxSignature] = useState("");
  const { publicKey, sendTransaction, signTransaction } = useWallet();
  const { connection } = useConnection();


  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //TODO: Saving ads
  //@ts-ignore
  const createAd = async (sig) => {

    if (localStorage.getItem("token")) {
      const { name, image, org_name } = formData;
      try {
        // @ts-ignore
        const response = await axios.post(
          `${URL}/ad/v2/create`,
          {
            name: name,
            image: image,
            available_balance: 100,
            tags: [""],
            org_id: localStorage.getItem("userId"),
            org_name: localStorage.getItem("name"),
            signature: sig,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            params: {
              user_type: "publisher_org",
            },
          }
        );

        console.log(response.data);
        // @ts-ignore
        // TODO: 
        // const {available_balance, impression, imageRes, nameRes} = response.data; 
        
        return response.data;

      } catch (e) {
        console.log("err ocurred during axios req", e);
      }
    }
    return { err: "internal err" };
  };


  // TODO: Payment handling 
  const payment = async () => {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey!,
          toPubkey: new PublicKey(
            "G7NowNJvumjfuAfCbQXrUtGSuJsA16JkmVELnepf4EEN"
          ),
          lamports: LAMPORTS_PER_SOL * 0.1,
        })
      );

      const sig = await sendTransaction(transaction, connection);
      console.log("Transaction signature -> ", sig);

      const latestBlockHash = await connection.getLatestBlockhash();

      console.log("latest block hash -> ", latestBlockHash);

      const confirmation = await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: sig,
      });

      if (confirmation) {
        // Creating ad after getting confirmation
        setTxSignature(sig);
        let response = createAd(sig);
        //TODO: Getting ad responses [PUSH THIS INTO THE ARRAY]
        console.log(response);
      }
      console.log("Transaction confirmation-> ", confirmation);
      window.location.reload();
    } catch (e) {
      console.log("err ocurred during payment processing", e);
    }
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", formData);
    setIsOpen(false);
    
    // TODO: First handle payment and then Save ads to the backend
    payment();
  };

  //@ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        marginRight: "50px",
        marginBottom: "30px",
        zIndex: 1, // Ensure it's on top of other elements
        borderRadius: "3rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ArrowBtn click={handleClickOpen} label="CREATE NEW" />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create New Ad</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name your campaign"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Organization name"
              name="org_name"
              value={formData.org_name}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Image url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUpInput;
