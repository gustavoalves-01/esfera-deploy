export default function ReadingTime(words: number): number {
    return Math.round(words / 150);
}