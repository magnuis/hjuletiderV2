import { LargeMapCard } from '../../../../components/norge-pa-langs/MapCard'
import { getActivities, concatPolyPoints } from '../../../../lib/strava'
import { stravaData } from '../../../../type'

export default async function RouteMap() {
  const strava: stravaData[] = await getActivities()

  strava.sort((a, b) => (a.date < b.date ? -1 : 1))

  const stagePoints = concatPolyPoints(strava)

  return (
    <div>
      <LargeMapCard points={stagePoints} />
    </div>
  )
}
