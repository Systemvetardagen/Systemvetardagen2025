
{/* <svg width="3631" height="2079"  */}
export type Company = {
  id: string;
  position: { top: number; left: number };
  size?:number;
};

type RoomPosition = {
  room: number;
  position: { top: number; left: number };
  size?:number;
};


const roomPositions: RoomPosition[] = 
[
  { "room": 1, "position": { "top": 500, "left": 800 },'size':300 }, //right up corner    add circle size 
  { "room": 2, "position": { "top": 2000, "left": 800 } },//right down corner
  { "room": 3, "position": { "top": 500, "left": 200} },
  { "room": 4, "position": { "top": 2000, "left": 200 } },
 

]


const companyRooms: Record<string, number> = {
  'accenture': 1, 
  'cygni':2,
  'handelsbanken':3,
  'ericsson':4


};


export const companies: Company[] = Object.entries(companyRooms).map(
  ([id, room]) => {
    const roomData = roomPositions.find((r) => r.room === room);
    if (!roomData) {
      throw new Error(`Room ${room} not found for company ${id}`);
    }

    return {
      id,
      position: roomData.position,
      size: roomData.size ? roomData.size : undefined,
    };
  }
);