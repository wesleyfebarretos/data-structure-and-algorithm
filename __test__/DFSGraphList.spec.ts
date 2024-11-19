import { dfsGraphList } from "../src/DFSGraphList";
import { WeightedAdjacencyList } from "../src/types/WeightedAdjacencyList.type";

describe("DFS on Graph Adjancency List", () => {
    let graph: WeightedAdjacencyList;

    beforeEach(() => {
        graph = [
            [{ to: 3, weight: 5 }],
            [{ to: 2, weight: 2 }],
            [{ to: 4, weight: 10 }],
            [{ to: 1, weight: 1 }],
            [{ to: 0, weight: 10 }],
        ]
    })

    it('should return path from source to needle', () => {
        expect(dfsGraphList(graph, 0, 4)).toEqual([0, 3, 1, 2, 4]);
    })

    it('should return an empty array cause path is not found', () => {
        expect(dfsGraphList(graph, 0, 5)).toEqual([]);
    })
})

