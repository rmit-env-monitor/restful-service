{
    "targets": [
        {
            "target_name": "so2Calculation",
            "sources": ["so2-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}