import app from './app';
import { connectDatabase } from './config/database';
import { PORT } from './config/dotenv';

app.listen(PORT, async () => {
  await connectDatabase();

  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
