import * as migration_20260220_010812_initial_migration from './20260220_010812_initial_migration'
import * as migration_20260220_033059_add_events_collection from './20260220_033059_add_events_collection'

export const migrations = [
  {
    up: migration_20260220_010812_initial_migration.up,
    down: migration_20260220_010812_initial_migration.down,
    name: '20260220_010812',
  },
  {
    up: migration_20260220_033059_add_events_collection.up,
    down: migration_20260220_033059_add_events_collection.down,
    name: '20260220_033059_add_events_collection',
  },
]
