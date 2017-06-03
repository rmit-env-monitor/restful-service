{
    "targets": [
        {
            "target_name": "pm10Calculation",
            "sources": ["pm10-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}