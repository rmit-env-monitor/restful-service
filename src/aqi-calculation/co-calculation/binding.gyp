{
    "targets": [
        {
            "target_name": "coCalculation",
            "sources": ["co-aqi-calculation.cc"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}