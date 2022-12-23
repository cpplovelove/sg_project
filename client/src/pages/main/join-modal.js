import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { UserController } from "../../controller/user-controller";

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

export default function JoinModal(props) {
  let { handleOpen, open } = props;
  const [userEmail, setEmail] = React.useState();
  const [userPass, setPass] = React.useState();
  const [checkPass, setCheckPass] = React.useState();
  const [userName, setUserName] = React.useState();
  const [authNumber, setNumber] = React.useState();

  const [isOpen, setOpen] = React.useState(false);
  const [approve, setApprove] = React.useState(false);

  async function checkIsEqual() {
    if (userPass === checkPass) {
      if (!userEmail || !userPass || !userName) {
        alert("항목을 모두 입력해주세요.");
        return false;
      }
      const joinStatus = await UserController.join(
        userEmail,
        userPass,
        userName
      );
      setApprove(true);
    } else {
      alert("비밀 번호가 서로 일치하는 지 확인해주세요.");
      return false;
    }
  }

  async function checkApprove() {
    console.log(userEmail, authNumber);
    const result = await UserController.approve(userEmail, authNumber);
    alert(result);
    if (result !== 200) alert("인증 번호를 다시 확인해주세요.");
    else alert("인증 성공. 로그인 후 서비스를 이용해주세요.");
  }

  React.useEffect(() => {
    setOpen(open);
  }, [open]);
  const handleClose = () => {
    setApprove(false);
    setUserName("");
    setEmail("");
    setPass("");
    setCheckPass("");
    setOpen(false);
    handleOpen();
  };

  if (approve === false) {
    //회원가입
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
              <h2 style={{ color: "black" }}>회원 가입</h2>
              <TextField
                id="userEmail"
                label="이메일 주소*"
                variant="outlined"
                style={{ width: "70%", marginBottom: "10px" }}
                onChange={(newValue) => setEmail(newValue.target.value)}
              />
              <TextField
                id="userName"
                label="이름*"
                variant="outlined"
                style={{ width: "70%", marginBottom: "10px" }}
                onChange={(newValue) => setUserName(newValue.target.value)}
              />
              <TextField
                id="userPass"
                label="비밀번호*"
                variant="outlined"
                style={{ width: "70%", marginBottom: "10px" }}
                onChange={(newValue) => setPass(newValue.target.value)}
              />
              <TextField
                id="reUserPass"
                label="비밀번호 확인*"
                variant="outlined"
                style={{ width: "70%", marginBottom: "10px" }}
                onChange={(newValue) => setCheckPass(newValue.target.value)}
              />
              <button onClick={() => checkIsEqual()}> 회원 가입 </button>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return (
      <>
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
              <h2 style={{ color: "black" }}>이메일 인증</h2>
              <div
                style={{
                  fontFamily: "inter",
                  color: "grey",
                  margin: "2% 4%",
                }}
              >
                이메일로 인증번호가 발송되었습니다. 10분 안에 이메일 인증 번호를
                입력해주세요.
              </div>
              <TextField
                id="authNumber"
                label="인증 번호*"
                variant="outlined"
                style={{ width: "70%", marginBottom: "10px" }}
                onChange={(newValue) => setNumber(newValue.target.value)}
              />
              <button onClick={() => checkApprove()}>인증 하기</button>
            </Box>
          </Fade>
        </Modal>
      </>
    );
  }
}
