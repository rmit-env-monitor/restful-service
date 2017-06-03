{
    "targets": [
        {
            "target_name": "o3Calculation",
            "sources": ["o3-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}