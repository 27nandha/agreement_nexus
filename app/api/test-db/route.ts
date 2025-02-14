import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    const mongoose = await connectDB();
    const connectionState = mongoose.connection.readyState;
    
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting',
    };

    return Response.json({ 
      status: 'success',
      message: `Database is ${states[connectionState as keyof typeof states]}`,
      connectionState 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return Response.json({ 
      status: 'error', 
      message: 'Failed to connect to database' 
    }, { status: 500 });
  }
}