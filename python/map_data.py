
from map_point import MapPoint

class MapData:
    def __init__(self):

        self.points = []
        self.load_points("map_data.csv")

    def load_points(self, filename):

        with open(filename, "r", encoding="utf-8-sig") as file:
            for line in file:
                self.load_point(line.strip())
                    
    def load_point(self, line):

        arr = line.split(",")
        if len(arr) != 3:
            return
        
        print(arr)

        id = int(arr[0])
        x = int(arr[1])
        y = int(arr[2])

        point = MapPoint(id, x, y)
        self.points.append(point)

if __name__ == "__main__":
    MapData()
