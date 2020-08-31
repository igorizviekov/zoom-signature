const crypto = require("crypto");

exports.getSignature = (req, res, next) => {
  const meetingId = req.body.meetingId;
  const role = req.body.role;
  const apiKey = process.env.API_KEY;
  const apiSecret = process.env.API_SECRET;
  if (!meetingId) {
    console.log(req.body);
    return res.status(404).json({
      message: "Please provide a meeting ID."
    });
  }

  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(apiKey + meetingId + timestamp + role).toString(
    "base64"
  );
  const hash = crypto
    .createHmac("sha256", apiSecret)
    .update(msg)
    .digest("base64");
  const signature = Buffer.from(
    `${apiKey}.${meetingId}.${timestamp}.${role}.${hash}`
  ).toString("base64");

  res.status(200).json({
    signature: signature,
    message: "Success"
  });
};
