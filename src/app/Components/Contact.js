import { Button } from "@mui/material";

export default function Contact() {
    return (
        <>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmanmaher858@gmail.com"
                target="_blank"
                // rel="noopener noreferrer"
            >
                <Button
                    variant="contained"
                    className="text-dark bg-white"
                >
                    Contact Us
                </Button>
            </a>
        </>
    );
}
