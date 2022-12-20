export async function emailRequest(options: any) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  const response = await fetch(`http://localhost:3000/sendMail`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ options }),
  });

  const result = await response.json();
  console.log(result);
  return result;
}
