import React from "react";
// import  QRCode  from "react-qr-svg";

const styles = {
  root: {
    fontFamily: "sans-serif"
  },
  qrcode: {
    textAlign: "center"
  }
};

function QrCode({ productData }) {
  // Convert the productData object to a JSON string
  // const qrCodeData = JSON.stringify(productData);

  return (
    <div>
      <div style={styles.root}>
        <div style={styles.qrcode}>
          {/* <QRCode
            level="Q"
            style={{ width: 256 }}
            value={qrCodeData}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default QrCode;