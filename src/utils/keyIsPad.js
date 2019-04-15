export default function keyIsPad(key) {
  //use regex to make sure the key is a pad
  // returns BOOL
  const isPad = /[QAZWSXEDC]/

  return isPad.test(key)
}
