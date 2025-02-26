import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'
/* Tailwind styles */
import '../tailwind.css'
import { CalendarEventsContainer } from '@/pages/calendar-events'
import { EventEditContainer } from '@/pages/event-edit'
import {} from '@ebarooni/capacitor-calendar/dist/esm/definitions'
import { CalendarEventsProvider } from '@/provider/calendar-events/calendar-events-provider'
import { CreateEventContainer } from '@/pages/create-event'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <CalendarEventsProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/events">
              <CalendarEventsContainer />
            </Route>
            <Route exact path="/create-event">
              <CreateEventContainer />
            </Route>
            <Route exact path="/edit-event/:id">
              <EventEditContainer />
            </Route>

            <Route exact path="/">
              <Redirect to="/events" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </CalendarEventsProvider>
    </IonApp>
  )
}

export default App
