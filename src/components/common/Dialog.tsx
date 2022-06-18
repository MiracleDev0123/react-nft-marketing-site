import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import { TransitionProps } from "@mui/material/transitions";
import useBreakpoint from "../../hooks/useBreakpoint";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

interface DialogProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Modal: React.FC<DialogProps> = ({
  title,
  content,
  footer,
  open,
  onClose,
}) => {
  const breakPoint = useBreakpoint();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        className="popup"
        maxWidth={breakPoint === "xxl" ? "lg" : "md"}
      >
        <DialogTitle sx={{ padding: 0 }}>
          <p className="section-title2 text-center pb-xxl-4 pb-2 white">
            {title}
          </p>
        </DialogTitle>
        <DialogContent className="p-0">
          <>{content}</>
        </DialogContent>
        {footer && (
          <DialogActions>
            <Button onClick={onClose} className="text-white">
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default Modal;
