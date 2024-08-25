/**
 * applies on step of fitting a byte pair encoding tokenizer.
 * @param tokens
 */

export default function applyBPEStep(tokens: number[]): number[] {

    // Step 1: Count pair frequencies
    // @ts-ignore
    const pairCounts = new Map<string, number>();
    for (let i = 0; i < tokens.length - 1; i++) {
        const pair = `${tokens[i]},${tokens[i + 1]}`;
        pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
    }

    // Step 2: Find the most frequent pair
    let maxPair = '';
    let maxCount = 0;
    for (const [pair, count] of pairCounts.entries()) {
        if (count > maxCount) {
            maxCount = count;
            maxPair = pair;
        }
    }

    // Step 3: Create a new token for the most frequent pair
    const newToken = Math.max(...tokens) + 1;

    // Step 4: Replace all occurrences of the pair with the new token
    const result: number[] = [];
    for (let i = 0; i < tokens.length; i++) {
        if (i < tokens.length - 1 && `${tokens[i]},${tokens[i + 1]}` === maxPair) {

            result.push(newToken);

            i++; // Skip the next token as we've merged it
        } else {
            result.push(tokens[i]);
        }
    }

    return result;
}
