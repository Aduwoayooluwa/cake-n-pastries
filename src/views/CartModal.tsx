import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";
import ShoppingCart from "./CartItems";
import CartIcon from "@/models/cartIcon.model";
import { useAppStore } from "@/lib/store";

type CartModalProps = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void;
};

const CartModal = ({ isOpen, setIsOpen }: CartModalProps) => {
    const { cart } = useAppStore()
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <Box >
        <Button bg="none" onClick={handleOpen}>
            <CartIcon />
        </Button>
        <Modal   isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent mx={"20px"}>
            <ModalHeader>Your Cart Items</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <ShoppingCart cartItems={cart} />
            </ModalBody>
            <ModalFooter>
                <Button variant="ghost" mr={3} onClick={handleClose}>
                Cancel
                </Button>
                <Button colorScheme="blue" onClick={handleClose}>
                Save
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Box>
    );
};

export default CartModal;
