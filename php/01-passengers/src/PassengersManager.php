<?php

class PassengersManager
{
    const POSITION_UP = 0;
    const POSITION_DOWN = 1;
    public function countPassengersAtLastStation($data): int
    {
        $totalUp = 0;
        $totalDown = 0;
        foreach ($data as $station) {
            $totalUp += $station[PassengersManager::POSITION_UP];
            $totalDown += $station[PassengersManager::POSITION_DOWN];
        }
        return $totalUp - $totalDown;
    }
}
