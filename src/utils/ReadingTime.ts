export default function ReadingTime(text: String): Number {
    const words = text.split(" ");
    
    return Math.round(words.length * 2.5);
}