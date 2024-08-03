
from map_data import MapData
from map_point import MapPoint

from typing import *
import math

class PathAnalyst:
    def __init__(self) -> None:

        self.table = self.build_table()
        self.n = len(self.table.keys())
        self.metres_per_pixel = 0.778

    def build_table(self):

        data = MapData()

        table = {}
        for point in data.points:
            point: MapPoint
            table[point.identifier] = point

        return table
    
    def determine_path_length(self, path: List[int]):

        if len(path) != self.n:
            return -1

        total = 0
        for i in range(self.n):
            j = (i+1) % self.n
            total += self.get_metres_between(path[i], path[j])
        
        return int(total)

    def get_metres_between(self, i: int, j: int):

        a: MapPoint = self.table[i]
        b: MapPoint = self.table[j]
        dx = abs(a.x - b.x)
        dy = abs(a.y - b.y)
        distance_squared = (dx * dx) + (dy * dy)

        return math.sqrt(distance_squared) * self.metres_per_pixel


if __name__ == "__main__":

    analyst = PathAnalyst()
    example_path = [i+1 for i in range(50)]
    length = analyst.determine_path_length(example_path)
    print(f"the example path is {length} m long")

