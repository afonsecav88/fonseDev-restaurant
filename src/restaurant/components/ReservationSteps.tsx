import { Tabs, Tab } from '@nextui-org/react';

import {
  ReservationDate,
  ReservationCountPerson,
  ReservationTurn,
  ReservationSchedule,
  ReservationDetails,
  ReservationSummary,
} from './index';

import {
  useValidateReservationShedule,
  useReservationStepsStates,
} from '../hooks/';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectTab } from '../reducer/ReservationActions';

export const ReservationSteps = () => {
  const {
    // selectedDate,
    // setSelectedDate,
    // selectedTab,
    setSelectedTab,
    selectedCountPerson,
    setSelectedCountPerson,
    selectedTurn,
    setSelectedTurn,
    selectedSchedule,
    // setSelectedSchedule,
    setReservationDetails,
    reservationDetails,
  } = useReservationStepsStates();

  const { initialState, dispatch } = useReservationContext();
  const { selectedDate, selectedTab } = initialState;

  // useEffect(() => {
  //   dispatch(selectTab(tab));
  // }, [dispatch, tab]);

  // const dayOfWeek = useGetDayOfWeek(selectedDate);
  // const validateDate = useValidateReservationDate(selectedDate);

  // console.log(dayOfWeek);

  // const handleChangeTab = useCallback(() => {
  //   dispatch(selectTab(tab));
  // }, [dispatch, tab]);

  // console.log('selectedTab', selectedTab);

  const { isValidateReservationDetails } = useValidateReservationShedule(
    selectedTurn,
    selectedSchedule,
    selectedCountPerson
  );

  const handleOnSelectionChange = () => {
    dispatch(selectTab(selectedTab));
  };

  console.log('selectedTab:', selectedTab);
  return (
    <div className="flex flex-col items-center pl-8">
      <p className="text-center mb-2 font-semibold text-blue-400">
        Etapas de la reservación
      </p>

      <Tabs
        className="py-5"
        // selectedKey={selectedTab}
        // onSelectionChange={setSelectedTab}
        selectedKey={selectedTab}
        onSelectionChange={handleOnSelectionChange}
        color="success"
        aria-label="Tabs steps"
        radius="full"
        // isDisabled={true}
      >
        <Tab key="step1" title="Fecha">
          <ReservationDate
          // selectedDate={selectedDate}
          // setSelectedDate={setSelectedDate}
          />

          {/* <Button
            className="mt-2 p-4 h-10 bg-success-200 font-semibold"
            size="md"
            // isDisabled={validateDate}
            onPress={() => dispatch(selectTab('step2'))}
          >
            Siguiente paso
          </Button> */}
        </Tab>

        <Tab
          className="flex flex-col  sm:flex-row text-red-500"
          key="step2"
          title="Horarios y Detalles"
        >
          <div className="flex flex-col">
            <ReservationTurn
              selectedTurn={selectedTurn}
              setSelectedTurn={setSelectedTurn}
              // dayOfWeek={dayOfWeek}
            />
            <ReservationSchedule
            // selectedSchedule={selectedSchedule}
            // setSelectedSchedule={setSelectedSchedule}
            // dayOfWeek={dayOfWeek}
            />
            <ReservationCountPerson
              selectedCountPerson={selectedCountPerson}
              setSelectedCountPerson={setSelectedCountPerson}
            />
          </div>
          <ReservationDetails
            reservationDetails={reservationDetails}
            setReservationDetails={setReservationDetails}
            setSelectedTab={setSelectedTab}
            isValidateReservationDetails={isValidateReservationDetails}
          />
        </Tab>

        <Tab key="step3" title="Confirmar">
          <ReservationSummary
            selectedTurn={selectedTurn}
            selectedSchedule={selectedSchedule}
            selectedCountPerson={selectedCountPerson}
            selectedDate={selectedDate}
            reservationDetails={reservationDetails}
          />
        </Tab>
      </Tabs>
    </div>
  );
};
