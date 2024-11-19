import { bfsGraphMatrix } from "../src/BFSGraphMatrix";
import { WeightedAdjacencyMatrix } from "../src/types"

describe("BFS on Graph Adjancency Matrix", () => {
    let graph: WeightedAdjacencyMatrix;

    beforeEach(() => {
        graph = [
            [0,0,0,5,0],
            [0,0,2,0,0],
            [0,0,0,0,10],
            [0,1,0,0,0],
            [10,0,0,0,0],
        ]
    })

    it('should return path from source to needle', () => {
        expect(bfsGraphMatrix(graph, 0, 4)).toEqual([0,3,1,2,4]);
    })

    it('should return an empty array cause path is not found', () => {
        expect(bfsGraphMatrix(graph, 0, 5)).toEqual([]);
    })
})

