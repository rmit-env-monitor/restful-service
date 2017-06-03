#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculatePM10(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 54) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 54;
        brpt_low = 0;
    } else if (cctt >= 55 && cctt <= 154) {
        AQI_high = 100;
        AQI_low = 50;
        brpt_high = 154;
        brpt_low = 55;
    } else if (cctt >= 155 && cctt <= 254) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 254;
        brpt_low = 155;
    } else if (cctt >= 255 && cctt <= 354) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 354;
        brpt_low = 255;
    } else if (cctt >= 355 && cctt <= 424) {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 424;
        brpt_low = 355;
    } else if (cctt >= 425 && cctt <= 504) {
        AQI_high = 400;
        AQI_low = 301;
        brpt_high = 504;
        brpt_low = 425;
    } else {
        AQI_high = 500;
        AQI_low = 401;
        brpt_high = 604;
        brpt_low = 505;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculatePM10").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculatePM10)->GetFunction());
}

NODE_MODULE(addon, Init)