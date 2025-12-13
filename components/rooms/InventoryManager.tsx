"use client";
import { useState } from "react";
import styles from "@/components/rooms/Rooms.module.css";

interface Room {
  room: string;
  total: number;
  direct: number;
  corporate: number;
  ota: number;
  blocked: number;
}

export default function InventoryManager() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    {
      room: "Deluxe King",
      total: 20,
      direct: 6,
      corporate: 4,
      ota: 8,
      blocked: 2,
    },
    {
      room: "Premium Suite",
      total: 10,
      direct: 3,
      corporate: 2,
      ota: 4,
      blocked: 1,
    },
  ];

  const handleRowClick = (room: Room) => setSelectedRoom(room);

  return (
    <>
      <div className="section-info">
        View and edit total inventory and high-level allotments by channel.
      </div>

      <div className={styles.tableWrap}>
        <table className="table">
          <thead>
            <tr>
              <th>Room type</th>
              <th>Total</th>
              <th>Direct</th>
              <th>Corporate</th>
              <th>OTA</th>
              <th>Blocked</th>
              <th>On sale</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((r: Room, index: number) => {
              const onSale =
                r.total - (r.direct + r.corporate + r.ota + r.blocked);

              return (
                <tr
                  key={index}
                  onClick={() => handleRowClick(r)}
                  style={{
                    background:
                      selectedRoom?.room === r.room ? "#eef3ff" : "transparent",
                  }}
                >
                  <td>{r.room}</td>
                  <td>{r.total}</td>
                  <td>{r.direct}</td>
                  <td>{r.corporate}</td>
                  <td>{r.ota}</td>
                  <td>{r.blocked}</td>
                  <td>{onSale}</td>
                  <td>
                    <button className="btn btn-sm">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.card}>
        <div className="card-header">
          <div>
            <div className="card-title">Edit inventory & allotment</div>
            <div className="card-subtitle">
              Select a room type from above and adjust allotments.
            </div>
          </div>

          <span className="metric-pill">
            {selectedRoom ? selectedRoom.room : "Select a row"}
          </span>
        </div>

        <form className={styles.grid4}>
          <div>
            <label>Room type</label>
            <select className="select">
              {rooms.map((r: Room) => (
                <option key={r.room}>{r.room}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Total inventory</label>
            <input
              className="input"
              defaultValue={selectedRoom?.total ?? ""}
            />
          </div>

          <div>
            <label>Direct allotment</label>
            <input
              className="input"
              defaultValue={selectedRoom?.direct ?? ""}
            />
          </div>

          <div>
            <label>Corporate allotment</label>
            <input
              className="input"
              defaultValue={selectedRoom?.corporate ?? ""}
            />
          </div>

          <div>
            <label>OTA allotment</label>
            <input
              className="input"
              defaultValue={selectedRoom?.ota ?? ""}
            />
          </div>

          <div>
            <label>Blocked</label>
            <input
              className="input"
              defaultValue={selectedRoom?.blocked ?? ""}
            />
          </div>

          <div className={styles.actions}>
            <button className="btn btn-primary" type="button">
              Save plan
            </button>
            <button className="btn" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
