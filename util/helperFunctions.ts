  
export function formatPrice(price: number) {
    return  new Intl.NumberFormat("en-NG", {currency: "NGN", style: 'currency'}).format(price)
}

export function formatNumberWithCommas(number: number) {
    // Convert the number to a string and use a regular expression to add commas
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function addNewlineAfterWords(text: string, wordLimit = 6) {
    const words = text.split(" ");
    let result = "";
  
    for (let i = 0; i < words.length; i++) {
      result += words[i];
      if ((i + 1) % wordLimit === 0 && i !== words.length - 1) {
        result += "\n";
      } else if (i !== words.length - 1) {
        result += " ";
      }
    }
  
    return result;
  }