function defangIPaddr(nums) {
  return address.replace(/\./g, "[.]");
}

// Test the function
let address = "1.1.1.1";
console.log("Output:", defangIPaddr(address));
