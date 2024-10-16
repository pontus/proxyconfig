function FindProxyForURL(url, host) {
  alert("Fix proxy called with" + host);

  //   if (isResolvable(host)) {
  //     alert(host + " is in DNS - doing direct");
  //     return "DIRECT";
  //   }

  if (
    isInNet(host, "192.168.25.0", "255.255.255.0") ||
    isInNet(host, "127.0.0.0", "255.0.0.0")
  ) {
    alert(host + " is local, doing direct");

    return "DIRECT";
  }

  if (
    isInNet(host, "192.168.25.0", "255.255.0.0") ||
    isInNet(host, "10.0.0.0", "255.0.0.0")
  ) {
    alert(host + " is external, using proxy");

    return "SOCKS 127.0.0.1:1080";
  }

  alert("Defaulting to direct for " + host);
  return "DIRECT";
}
