import { WeightedAdjacencyMatrix } from "./types";

export function bfsGraphMatrix(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    const q = [source];

    do {
        const curr = q.shift() as number;

        if(curr === needle) {
            break
        }

        const adjs = graph[curr];
        
        for(let y = 0; y < adjs.length; y++) {
            if(adjs[y] === 0 || seen[y]) {
                continue;
            }

            seen[y] = true;
            prev[y] = curr;
            q.push(y);
        }

    } while (q.length);

    if(prev[needle] === -1) {
        return [];
    }

    let curr = needle;

    const out = [];

    while(prev[curr] !== -1) {
        out.push(curr)                      ;

        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
