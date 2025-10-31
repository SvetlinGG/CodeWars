function ipsBetween(start, end) {
  // helper: convert IP string to integer
  const ipToNum = ip => 
    ip.split('.')
      .reduce((acc, part) => acc * 256 + Number(part), 0);

    console.log(ipToNum(end) - ipToNum(start));
}


  ipsBetween("10.0.0.0", "10.0.0.50");
  ipsBetween("10.0.0.0", "10.0.1.0");
  ipsBetween("20.0.0.10", "20.0.1.0");