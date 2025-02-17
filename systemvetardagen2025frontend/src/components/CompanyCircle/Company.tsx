
{/* <svg width="3631" height="2079"  */}
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
  { "room": 1, "position": { "top": 2044.59, "left": 1631.59 } },

]


const companyRooms: Record<string, number> = {
  'accenture': 1, 
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