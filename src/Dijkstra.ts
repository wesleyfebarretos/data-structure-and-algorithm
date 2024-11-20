import { WeightedAdjacencyList } from "./types/WeightedAdjacencyList.type";

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getNearestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;

    let nearestDist = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if(!seen[i] && nearestDist > dists[i]) {
            nearestDist = dists[i];
            idx = i;
        }
    }

    return idx;
}

export function dijkstra(graph: WeightedAdjacencyList, source: number, sink: number): number[] {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const dists: number[] = new Array(graph.length).fill(Infinity);
    const prevs: number[] = new Array(graph.length).fill(-1);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getNearestUnvisited(seen, dists);

        seen[curr] = true;

        const adjs = graph[curr];

        for(let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i];

            if(seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;

            if(dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prevs[edge.to] = curr;
            }
        }
    }

    if(!prevs[sink]) {
        return [];
    }

    let curr = sink;
    const out: number[] = [];

    while(prevs[curr] !== -1) {
        out.push(curr)
        curr = prevs[curr];
    }

    out.push(source);

    return out.reverse();
}
