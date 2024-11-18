import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

const setupSockets = (server: HttpServer) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log(' user connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    socket.on('game_over', (data) => {
      console.log('Game Over:', data);
      io.emit('game_result', data); // שידור תוצאה לכל השחקנים
    });
  });

  return io;
};

export { setupSockets };
