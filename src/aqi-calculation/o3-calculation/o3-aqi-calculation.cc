#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculateO3(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 0.054) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 0.054;
        brpt_low = 0;
    } else if (cctt >= 0.055 && cctt <= 0.070) {
        AQI_high = 100;
        AQI_low = 51;
        brpt_high = 0.07;
        brpt_low = 0.055;
    } else if (cctt >= 0.071 && cctt <= 0.085) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 0.085;
        brpt_low = 0.071;
    } else if (cctt >= 0.086 && cctt <= 0.105) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 0.105;
        brpt_low = 0.086;
    } else {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 0.2;
        brpt_low = 0.106;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculateO3").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculateO3)->GetFunction());
}

NODE_MODULE(addon, Init)