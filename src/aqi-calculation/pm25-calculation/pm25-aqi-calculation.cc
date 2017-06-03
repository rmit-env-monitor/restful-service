#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculatePM25(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 12) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 12;
        brpt_low = 0;
    } else if (cctt >= 12.1 && cctt <= 35.4) {
        AQI_high = 100;
        AQI_low = 50;
        brpt_high = 35.4;
        brpt_low = 12.1;
    } else if (cctt >= 35.5 && cctt <= 55.4) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 55.4;
        brpt_low = 35.5;
    } else if (cctt >= 55.5 && cctt <= 150.4) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 150.4;
        brpt_low = 55.5;
    } else if (cctt >= 150.5 && cctt <= 250.4) {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 250.4;
        brpt_low = 150.5;
    } else if (cctt >= 250.5 && cctt <= 350.4) {
        AQI_high = 400;
        AQI_low = 301;
        brpt_high = 350.4;
        brpt_low = 250.5;
    } else {
        AQI_high = 500;
        AQI_low = 401;
        brpt_high = 500.4;
        brpt_low = 350.5;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculatePM25").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculatePM25)->GetFunction());
}

NODE_MODULE(addon, Init)