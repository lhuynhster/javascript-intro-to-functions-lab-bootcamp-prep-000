function shout(string) {
  return "hello".toUpperCase()
}

function whisper(string) {
  return "HELLO".toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
  return string.toUpperCase
}

function logWhisper(string) {
  console.log("hello")
  return string.toLowerCase()
}

function sayHiToGrandma(hello) {
  if (hello === hello.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (hello === hello.toLowerCase()) {
    return 'i can\'t hear you!';
  }
  else if (hello === "I love you, Grandma.") {
    return 'I love you, too.';
  }
}
