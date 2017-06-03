{
    "targets": [
        {
            "target_name": "pm25Calculation",
            "sources": ["pm25-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}