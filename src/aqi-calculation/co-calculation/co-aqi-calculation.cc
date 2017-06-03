#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculateCO(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 4.4) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 4.4;
        brpt_low = 0;
    } else if (cctt >= 4.5 && cctt <= 9.4) {
        AQI_high = 100;
        AQI_low = 50;
        brpt_high = 9.4;
        brpt_low = 4.5;
    } else if (cctt >= 9.5 && cctt <= 12.4) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 12.4;
        brpt_low = 9.5;
    } else if (cctt >= 12.5 && cctt <= 15.4) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 15.4;
        brpt_low = 12.5;
    } else if (cctt >= 15.5 && cctt <= 30.4) {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 30.4;
        brpt_low = 15.5;
    } else if (cctt >= 30.5 && cctt <= 40.4) {
        AQI_high = 400;
        AQI_low = 301;
        brpt_high = 40.4;
        brpt_low = 30.5;
    } else {
        AQI_high = 500;
        AQI_low = 401;
        brpt_high = 50.4;
        brpt_low = 40.5;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculateCO").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculateCO)->GetFunction());
}

NODE_MODULE(addon, Init)