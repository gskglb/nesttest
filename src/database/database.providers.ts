import * as mongoose from 'mongoose';

export const databaseProviders = [{
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://test:test123@ds263161.mlab.com:63161/school'),
  },
];