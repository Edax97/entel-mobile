import React, { useState } from "react";
import { Portal, Snackbar } from "react-native-paper";

interface Props {
  mssg: string;
}
export default function Alert(props: Props) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Portal>
      <Snackbar
        visible={showAlert}
        onDismiss={() => setShowAlert(false)}
        action={{
          label: "Cerrar",
        }}
      >
        {props.mssg}
      </Snackbar>
    </Portal>
  );
}
