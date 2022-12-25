import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

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

export default function WishModal() {
  const [isOpen, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
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
        <Fade in={isOpen}>
          <Box sx={style}>
            <h2 style={{ color: "black" }}>소 원 을 말 해 봐</h2>
            연말 연초 목표를 세우느라 바쁜 J형 당신을 위한 서비스
            <br /> 동기가 없으면 실행까지 100만년 걸리는 당신을 위해 만든
            서비스에요☺️
            <br />
            <br />
            <br />
            1. 올해 이루고픈 소원을 작성해주세요!
            <br />
            2. 소문낼 수록 소원은 더 잘 이뤄지는 법~ 친구와 공유해보세요. <br />
            3. 올해 말이 되면 작성하셨던 소원, 목표를 다시 이메일로
            상기시켜드릴게요! 올해 나의 목표가 뭐였는 지 다시 점검하고 회고하는
            시간을 가질 수 있습니다.
            <br />
            <br />
            <br />
            내가 적은 목표와 소원은 메인화면의 게시판을 통해서 공유돼요! <br />
            {/* 공유를 원하지 않는 경우에는 꼭 done을 누를 때 옵션을 체크해주세요!{" "} */}
            <br />
            <button
              style={{ marginTop: "4%" }}
              onClick={() => {
                handleClose();
              }}
            >
              {" "}
              d o n e{" "}
            </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
