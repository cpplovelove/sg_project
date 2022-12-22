import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fffff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function LoginModal(props) {
  let { handleOpen, open } = props;

  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);
  const handleClose = () => {
    setOpen(false);
    handleOpen();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 style={{ color: "black" }}>로그인</h2>
            {/* 텍스트필드 */}
            <TextField
              id="userEmail"
              label="이메일 주소*"
              variant="outlined"
              style={{ width: "70%", marginBottom: "10px", marginTop: "2%" }}
            />
            <TextField
              id="userPass"
              label="비밀번호*"
              variant="outlined"
              style={{ width: "70%", marginBottom: "3%" }}
            />
            <button> 로그인 </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
