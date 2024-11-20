import { dijkstra } from "../src/Dijkstra";
import { WeightedAdjacencyList } from "../src/types/WeightedAdjacencyList.type";

describe("Dijkstra Algorithm on Graph", () => {
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

    it('should return shortest path from source to needle = 4', () => {
        expect(dijkstra(graph, 0, 4)).toEqual([0, 3, 1, 2, 4]);
    })

    it('should return shortest path from source to needle = 0', () => {
        expect(dijkstra(graph, 2, 0)).toEqual([2, 4, 0]);
    })

    it('should return an empty array cause path is not found', () => {
        expect(dijkstra(graph, 0, 5)).toEqual([]);
    })
})

