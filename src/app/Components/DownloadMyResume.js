import { Button } from "@mui/material";

export default function DownloadMyResume() {
    return (
        <>
            <Button
                variant="contained"
                className="bg-dark"
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/AbdelrahmanMaherResume.pdf";
                    link.download = "AbdelrahmanMaherResume.pdf";
                    link.click();
                }}
            >
                Download My Resume
            </Button>
        </>
    );
}
