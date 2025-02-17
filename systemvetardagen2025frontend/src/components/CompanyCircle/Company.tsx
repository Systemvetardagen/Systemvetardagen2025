
export type Company = {
  id: string;
  position: { top: number; left: number };
};

type RoomPosition = {
  room: number;
  position: { top: number; left: number };
};


const roomPositions: RoomPosition[] = 
[
  { "room": 1, "position": { "top": 1593, "left": 1674 } },
  { "room": 2, "position": { "top": 1382, "left": 1818 } },
  { "room": 3, "position": { "top": 1304, "left": 1943.59 } },
  { "room": 4, "position": { "top": 954, "left": 1685 } },
  { "room": 5, "position": { "top": 954, "left": 1792 } },
  { "room": 6, "position": { "top": 1593, "left": 1468 } },
  { "room": 7, "position": { "top": 1028, "left": 1549 } },
  { "room": 8, "position": { "top": 1028, "left": 1656 } },
  { "room": 9, "position": { "top": 1028, "left": 1763 } },
  { "room": 10, "position": { "top": 1155, "left": 1462 } },
  { "room": 11, "position": { "top": 1155, "left": 1569 } },
  { "room": 12, "position": { "top": 1155, "left": 1676 } },
  { "room": 13, "position": { "top": 1593, "left": 1138 } },
  { "room": 14, "position": { "top": 1370, "left": 1128 } },
  { "room": 15, "position": { "top": 1370, "left": 1259 } },
  { "room": 16, "position": { "top": 1370, "left": 1366 } }
]


const companyRooms: Record<string, number> = {
  'accenture': 4, 
};


export const companies: Company[] = Object.entries(companyRooms).map(
  ([id, room]) => {
    // 根据房间号查找位置
    const roomData = roomPositions.find((r) => r.room === room);
    if (!roomData) {
      throw new Error(`Room ${room} not found for company ${id}`);
    }
    // 返回 Company 对象
    return {
      id,
      position: roomData.position,
    }; //example：{ id: 'accenture', position: { top: 954, left: 1685 } }
  }
);