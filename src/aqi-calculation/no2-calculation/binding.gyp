{
    "targets": [
        {
            "target_name": "no2Calculation",
            "sources": ["no2-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}