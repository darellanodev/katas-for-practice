<?php

class PassengersManager
{
    public function countPassengersAtLastStation($data): int
    {
        $totalUp = 0;
        $totalDown = 0;
        foreach ($data as $station) {
            $totalUp += $station[0];
            $totalDown += $station[1];
        }
        return $totalUp - $totalDown;
    }
}
